export type Message = {
	id: string;
	conversationId: string;
	senderId: string; // sender's userId 
	content: string;
	timestamp: string;
	sent?: boolean;
  };
  