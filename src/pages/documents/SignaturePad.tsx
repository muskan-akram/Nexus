import React, { useRef, useState } from 'react';
import SignatureCanvas from 'react-signature-canvas';
import { Button } from '../../components/ui/Button';

interface SignaturePadProps {
  onSave?: (dataURL: string) => void;
}

export function SignaturePad({ onSave }: SignaturePadProps) {
  const sigCanvasRef = useRef<SignatureCanvas>(null);
  const [signedData, setSignedData] = useState<string | null>(null);

  const handleClear = () => {
    sigCanvasRef.current?.clear();
    setSignedData(null);
  };

  const handleSave = () => {
    if (!sigCanvasRef.current) return;
    if (sigCanvasRef.current.isEmpty()) {
      alert('Please provide a signature first.');
      return;
    }
    const dataURL = sigCanvasRef.current.toDataURL('image/png');
    setSignedData(dataURL);

    if (onSave) {
      onSave(dataURL);
    }
  };

  return (
    <div className="space-y-4">
      {!signedData ? (
        <>
          <div className="border-2 border-dashed border-gray-400 rounded-md">
            <SignatureCanvas
              ref={sigCanvasRef}
              penColor="black"
              canvasProps={{ width: 500, height: 200, className: 'rounded-md' }}
            />
          </div>

          <div className="space-x-2">
            <Button onClick={handleSave}>Sign Document</Button>
            <Button variant="outline" onClick={handleClear}>Clear</Button>
          </div>
        </>
      ) : (
        <div>
          <p className="text-green-700 font-semibold">Document Signed ✔</p>
          <img
            src={signedData}
            alt="Signature"
            className="mt-2 border rounded-md"
          />
          <div className="mt-2">
            <Button variant="outline" onClick={handleClear}>Clear / Re-sign</Button>
          </div>
        </div>
      )}
    </div>
  );
}
