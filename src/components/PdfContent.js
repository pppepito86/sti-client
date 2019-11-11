import React from 'react';
import { useParams, useHistory } from "react-router";
import LoadingContent from './LoadingContent';
import { blob } from '../rest'
import useAsync from '../useAsync'
import { useApp } from '../AppContext';

const PdfContent = () => {
  const history = useHistory();
  const time = useApp().time;
  if (time && time.timeTillStart > 0) history.push("/"); 

  const { tid } = useParams();
  const { value, loading } = useAsync(blob, `tasks/${tid}/pdf`, [tid]);

  if (!time || loading) return <LoadingContent />

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