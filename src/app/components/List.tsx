import { ListItem } from "./ListItem";
import { PostTypes } from "@/types/Post.types";
import { Card } from "@mui/material";

interface ListProps {
  posts: PostTypes[];
}

export const List: React.FC<ListProps> = ({ posts }) => {
  return (
    <Card>
      {posts.map((post) => (
        <ListItem key={post.id} post={post} />
      ))}
    </Card>
  );
};
