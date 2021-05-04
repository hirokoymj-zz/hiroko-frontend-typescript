import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles(({ spacing }: Theme) => ({
  sectionTitle: {
    fontFamily: ["Titillium Web", "sans-serif"].join(","),
    marginBottom: spacing(2),
  },
}));

type Props = {
  text: string;
};

export const Title = ({ text }: Props) => {
  const classes = useStyles();
  return (
    <Typography
      component="h2"
      variant="h5"
      color="primary"
      className={classes.sectionTitle}
      noWrap>
      {text}
    </Typography>
  );
};
