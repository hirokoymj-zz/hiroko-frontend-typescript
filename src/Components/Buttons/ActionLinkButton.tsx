import React from "react";
import Link from "@material-ui/core/Link";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles, Theme } from "@material-ui/core/styles";
import green from "@material-ui/core/colors/green";
import Icon from "@material-ui/core/Icon";

const useStyles = makeStyles(({ spacing, palette }: Theme) => ({
  iconButtonRoot: {
    backgroundColor: green[500],
    padding: spacing(1),
    margin: spacing(0, 1),
    "&:hover": {
      backgroundColor: green[200],
    },
  },
  svgIconRoot: {
    color: palette.common.white,
    fontSize: "1.3rem",
    textAlign: "center",
    fontWeight: 400,
  },
}));

type Props = {
  icon: string;
  // onClick: () => void;
  onClick:
    | (React.MouseEventHandler<HTMLAnchorElement> &
        React.MouseEventHandler<HTMLSpanElement>)
    | undefined;
};

export const ActionLinkButton = ({ icon, onClick }: Props) => {
  const classes = useStyles();

  return (
    <Link href="#" onClick={onClick}>
      <IconButton classes={{ root: classes.iconButtonRoot }}>
        <Icon classes={{ root: classes.svgIconRoot }}>{icon}</Icon>
      </IconButton>
    </Link>
  );
};
