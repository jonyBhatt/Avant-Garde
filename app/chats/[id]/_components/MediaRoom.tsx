"use client";

import { User } from "@prisma/client";
import { Loader } from "lucide-react";
import { useEffect, useState } from "react";

import {
  ControlBar,
  GridLayout,
  LiveKitRoom,
  ParticipantTile,
  RoomAudioRenderer,
  useTracks,
  VideoConference,
} from "@livekit/components-react";

import "@livekit/components-styles";

interface MediaRoomProps {
  chatId: string;
  currentUser: User;
  video: boolean;
  audio: boolean;
}

export const MediaRoom = ({
  currentUser,
  chatId,
  audio,
  video,
}: MediaRoomProps) => {
  const [token, setToken] = useState("");

  useEffect(() => {
    const name = `${currentUser.firstName}`;
    (async () => {
      try {
        const response = await fetch(
          `/api/livekit?room=${chatId}&username=${name}`
        );
        const data = await response.json();
        setToken(data.token);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [chatId, currentUser.firstName]);

  if (token === "") {
    return (
      <div className="flex justify-center items-center">
        <Loader className="w-8 h-8 animate-spin" />
      </div>
    );
  }

  return (
    <LiveKitRoom
      video={video}
      audio={audio}
      token={token}
      connect={true}
      serverUrl={process.env.NEXT_PUBLIC_LIVEKIT_URL}
      // Use the default LiveKit theme for nice styles.
      data-lk-theme="default"
      style={{ height: "100dvh" }}
    >
      <VideoConference />
      <RoomAudioRenderer />
    </LiveKitRoom>
  );
};
