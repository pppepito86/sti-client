import React from 'react';
import { useParams } from "react-router";
import LoadingContent from './LoadingContent';
import { blob } from '../rest'
import useAsync from '../useAsync'
import { useApp } from '../AppContext';

const PdfContent = () => {
  const contestIsRunning = useApp().contestIsRunning;
  const contestIsFinished = useApp().contestIsFinished;

  const { tid } = useParams();
  const { value, loading } = useAsync(blob, `tasks/${tid}/pdf`, [tid]);

  if (loading || (!contestIsRunning && !contestIsFinished)) return <LoadingContent />

  const pdf = URL.createObjectURL(value);

  return (
    <div className="content-wrapper" style={{ minHeight: '498px' }}>
      <content>
        <object width='100%' height='530' data={pdf} type='application/pdf'><inner-text>pdf</inner-text></object>
      </content>
    </div>
  );
}

export default PdfContent;