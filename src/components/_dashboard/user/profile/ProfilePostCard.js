import PropTypes from "prop-types";
import { Icon } from "@iconify/react";
import { useState, useRef } from "react";
import { Link as RouterLink } from "react-router-dom";
import roundSend from "@iconify/icons-ic/round-send";
import heartFill from "@iconify/icons-eva/heart-fill";
import shareFill from "@iconify/icons-eva/share-fill";
import moreVerticalFill from "@iconify/icons-eva/more-vertical-fill";
import messageSquareFill from "@iconify/icons-eva/message-square-fill";
import roundAddPhotoAlternate from "@iconify/icons-ic/round-add-photo-alternate";
// material
import {
  Box,
  Link,
  Card,
  Stack,
  Paper,
  Avatar,
  Checkbox,
  TextField,
  Typography,
  CardHeader,
  IconButton,
  AvatarGroup,
  InputAdornment,
  FormControlLabel,
} from "@material-ui/core";
// utils
import { fDate } from "../../../../utils/formatTime";
import { fShortenNumber } from "../../../../utils/formatNumber";
// hooks
import useAuth from "../../../../hooks/useAuth";
//
import MyAvatar from "../../../MyAvatar";
import EmojiPicker from "../../../EmojiPicker";

// ----------------------------------------------------------------------

ProfilePostCard.propTypes = {
  post: PropTypes.object,
};

export default function ProfilePostCard({ post }) {
  const { user } = useAuth();
  const commentInputRef = useRef(null);
  const fileInputRef = useRef(null);
  const [isLiked, setLiked] = useState(post.isLiked);
  const [likes, setLikes] = useState(post.personLikes.length);
  const [message, setMessage] = useState("");
  const hasComments = post.comments.length > 0;

  const handleLike = () => {
    setLiked(true);
    setLikes((prevLikes) => prevLikes + 1);
  };

  const handleUnlike = () => {
    setLiked(false);
    setLikes((prevLikes) => prevLikes - 1);
  };

  const handleChangeMessage = (event) => {
    setMessage(event.target.value);
  };

  const handleClickAttach = () => {
    fileInputRef.current.click();
  };

  const handleClickComment = () => {
    commentInputRef.current.focus();
  };

  return (
    <Card>
      <CardHeader
        disableTypography
        avatar={<MyAvatar />}
        title={
          <Link
            to="#"
            variant="subtitle2"
            color="text.primary"
            component={RouterLink}
          >
            {user.displayName}
          </Link>
        }
        subheader={
          <Typography
            variant="caption"
            sx={{ display: "block", color: "text.secondary" }}
          >
            {fDate(post.createdAt)}
          </Typography>
        }
        action={
          <IconButton>
            <Icon icon={moreVerticalFill} width={20} height={20} />
          </IconButton>
        }
      />

      <Stack spacing={3} sx={{ p: 3 }}>
        <Typography variant="body1">{post.message}</Typography>
        <Box sx={{ position: "relative", pt: "calc(100% / 16 * 9)" }}>
          <Box
            component="img"
            alt="post media"
            src={post.media}
            sx={{
              top: 0,
              width: 1,
              height: 1,
              borderRadius: 1,
              objectFit: "cover",
              position: "absolute",
            }}
          />
        </Box>
      </Stack>
    </Card>
  );
}
