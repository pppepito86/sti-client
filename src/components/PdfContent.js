import React, { useState, useEffect } from 'react';
import { useParams } from "react-router";
import LoadingContent from './LoadingContent';
import { blob } from '../rest'

const PdfContent = () => {
  const {tid} = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [pdf, setPdf] = useState();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      const data = await blob(`tasks/${tid}/pdf`);
      const pdf = URL.createObjectURL(data);
      setPdf(pdf);
      
      setIsLoading(false);
    };

    fetchData();
  }, [tid]);

  if (isLoading) return <LoadingContent />

  return (
    <div className="content-wrapper" style={{minHeight: '498px'}}>
      <content>
      <object width='100%' height='530' data={pdf} type='application/pdf'></object>
      </content>
    </div>
  );
}

export default PdfContent;