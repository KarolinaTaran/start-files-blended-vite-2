import React from "react";
import PropTypes from "prop-types";
import { Comment } from "../Comment/Comment";
import { Grid } from "../Grid/Grid";
import { useGetAllCommentsQuery } from "../../redux/commentApi";
import { Loader } from "../Loader/Loader";
import { useSelector } from "react-redux";
import { selectFilter } from "../../redux/filterSlice";
// import { comments } from '../../helpers/comments';

export const Comments = () => {
  const { data: comments, isLoading } = useGetAllCommentsQuery();
  const filter = useSelector(selectFilter);
  const getFilteredComments = () => {
    return comments.filter((comment) => {
      console.log(comment);
      return comment.content.toLowerCase().includes(filter.toLowerCase());
    });
  };
  return (
    <>
      {isLoading && <Loader />}
      <Grid>
        {comments &&
          getFilteredComments().map((comment) => (
            <Comment key={comment.id} {...comment} />
          ))}
      </Grid>
    </>
  );
};

Comments.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape().isRequired),
};
