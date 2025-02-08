import { PostTypes } from "@/types/Post.types";
import { CardContent, Typography } from "@mui/material";
interface ListItemProps {
  post: PostTypes;
}
export const ListItem: React.FC<ListItemProps> = ({ post }) => {
  const { id, title, body } = post;
  return (
    <CardContent key={id}>
      <Typography variant="h5">{title}</Typography>
      <Typography variant="body2">{body}</Typography>
      <p>{body}</p>
    </CardContent>
  );
};
