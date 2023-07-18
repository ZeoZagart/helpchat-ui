export type Message = {
	id: string;
	conversationId: string;
	senderId: string; // sender's userId 
	content: string;
	timestamp: Date;
	sent?: boolean;
  };
  