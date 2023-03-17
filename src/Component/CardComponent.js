import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import {
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
  Grid,
} from "@mui/material";

const Root = styled("div")({
  flexGrow: 1,
});

const StyledCard = styled(Card)({
  width: "100%",
  maxWidth: 345,
  margin: "16px",
});

const StyledButton = styled(Button)({
  margin: "8px",
});

export default function CardComponent() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setPosts(response.data);
      })

      .catch((error) => console.log(error));
  }, []);

  return (
    <Root>
      <Grid container spacing={2}>
        {posts.map((item) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
            <StyledCard>
              <CardContent>
                <Typography variant="h5" component="h2" gutterBottom>
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.body}
                </Typography>
              </CardContent>
              <CardActions>
                <StyledButton
                  variant="contained"
                  component={Link}
                  to={ "/post" } state={ {post: item }} 
                  // to={"/post"} state={ {post: item }} 
                >
                  Read more
                </StyledButton>
              </CardActions>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
    </Root>
  );
}
