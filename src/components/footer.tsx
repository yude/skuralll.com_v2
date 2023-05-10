import {
  createStyles,
  Container,
  Group,
  ActionIcon,
  rem,
  Image,
  Text,
} from "@mantine/core";
import Link from "@/components/link";

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: rem(120),
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  // inner: {
  //   display: "flex",
  //   justifyContent: "center",
  //   alignItems: "center",
  //   paddingTop: theme.spacing.xl,
  //   paddingBottom: theme.spacing.xl,

  //   [theme.fn.smallerThan("xs")]: {
  //     flexDirection: "column",
  //   },
  // },

  inner: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
  },

  legends: {
    marginBottom: rem(10),
  },
}));

// フッター
export default function Footer() {
  const { classes } = useStyles();

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Container className={classes.legends}>
          <Text fz="md" c="gray.7">
            © 2023 skuralll
          </Text>
          {/* <Link href={"mailto:skuralll.com@gmail.com"} external></Link> */}
        </Container>
        <Image
          src="https://moe-counter.yude.jp/get/@:skuralll"
          width={315}
          height={100}
          alt={"アクセスカウンタ"}
        />
      </Container>
    </div>
  );
}