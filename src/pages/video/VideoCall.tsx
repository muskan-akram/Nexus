import React, { useState, useRef } from 'react';

export function VideoCall() {
  const [inCall, setInCall] = useState(false);
  const [audioEnabled, setAudioEnabled] = useState(true);
  const [videoEnabled, setVideoEnabled] = useState(true);
  const localVideoRef = useRef<HTMLVideoElement>(null);
  const remoteVideoRef = useRef<HTMLVideoElement>(null);

  const startCall = async () => {
    setInCall(true);
    try {
      // Get local stream
      const localStream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });
      if (localVideoRef.current) {
        localVideoRef.current.srcObject = localStream;
      }

      // For a simple mock, we can just mirror local stream as remote
      if (remoteVideoRef.current) {
        remoteVideoRef.current.srcObject = localStream;
      }
    } catch (err) {
      console.error('Error accessing media devices', err);
    }
  };

  const toggleAudio = () => {
    if (localVideoRef.current?.srcObject instanceof MediaStream) {
      const track = localVideoRef.current.srcObject.getAudioTracks()[0];
      track.enabled = !audioEnabled;
      setAudioEnabled(!audioEnabled);
    }
  };

  const toggleVideo = () => {
    if (localVideoRef.current?.srcObject instanceof MediaStream) {
      const track = localVideoRef.current.srcObject.getVideoTracks()[0];
      track.enabled = !videoEnabled;
      setVideoEnabled(!videoEnabled);
    }
  };

  const endCall = () => {
    setInCall(false);
    if (localVideoRef.current?.srcObject instanceof MediaStream) {
      localVideoRef.current.srcObject.getTracks().forEach(track => track.stop());
      localVideoRef.current.srcObject = null;
    }
    if (remoteVideoRef.current?.srcObject instanceof MediaStream) {
      remoteVideoRef.current.srcObject.getTracks().forEach(track => track.stop());
      remoteVideoRef.current.srcObject = null;
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-2">Video Call</h1>
      <p className="mb-4">Connect with investors or entrepreneurs in real time.</p>

      <div className="grid grid-cols-2 gap-4">
        <video
          ref={localVideoRef}
          autoPlay
          muted
          className="w-full h-56 bg-black rounded-md"
        />
        <video
          ref={remoteVideoRef}
          autoPlay
          className="w-full h-56 bg-black rounded-md"
        />
      </div>

      <div className="mt-4 space-x-2">
        {!inCall ? (
          <button
            onClick={startCall}
            className="px-4 py-2 bg-green-500 text-white rounded"
          >
            Start Call
          </button>
        ) : (
          <button
            onClick={endCall}
            className="px-4 py-2 bg-red-500 text-white rounded"
          >
            End Call
          </button>
        )}

        <button
          onClick={toggleAudio}
          className="px-3 py-2 bg-gray-700 text-white rounded"
        >
          {audioEnabled ? 'Mute' : 'Unmute'}
        </button>
        <button
          onClick={toggleVideo}
          className="px-3 py-2 bg-gray-700 text-white rounded"
        >
          {videoEnabled ? 'Camera Off' : 'Camera On'}
        </button>
        <button
          className="px-3 py-2 bg-gray-700 text-white rounded"
        >
          Share Screen
        </button>
      </div>
    </div>
  );
}
