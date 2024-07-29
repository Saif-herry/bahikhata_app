type Support = {
  id: string;
  userId: string;
  User: User;
  subject: string;
  isViewed: boolean;
  queryMessage: string;
  replyMessage?: string | null;
  status: "Pending" | "Resolve" | "Reject";
  createdAt: DateTime;
  updatedAt: DateTime;
};
