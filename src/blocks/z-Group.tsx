// import Container from "../components/Container";
// import { cx } from "@cloakui/styles";
// import { Block, wpBlockStyleBuilder } from "cloakwp";

// export function Group({ block }) {
//   const { classes, styles } = wpBlockStyleBuilder(block);

//   if (!block?.innerBlocks) return <></>;

//   const { layout, align } = block.attrs;
//   const numBlocks = block?.innerBlocks?.length;

//   const groupClasses = cx(
//     "flex gap-x-4 md:gap-x-6 flex-wrap",
//     layout.type == "flex"
//       ? layout.flexWrap
//         ? "flex-row"
//         : "flex-col"
//       : "flex-col",
//     numBlocks <= 2
//       ? "sm:flex-nowrap"
//       : numBlocks <= 3
//       ? "md:flex-nowrap"
//       : numBlocks <= 4
//       ? "lg:flex-nowrap"
//       : ""
//   );

//   if (align != "full") {
//     return (
//       <Container className={cx("relative")}>
//         <div
//           className={cx(styles.margin && "rounded-lg", groupClasses, classes)}
//           style={styles}
//         >
//           {block?.innerBlocks?.map((innerBlock, index) => (
//             <Block
//               key={index}
//               block={innerBlock}
//               parentBlock={block.data}
//               isNested={true}
//               className="min-w-[150px]"
//             />
//           ))}
//         </div>
//       </Container>
//     );
//   } else {
//     return (
//       <div className={cx(classes)} style={styles}>
//         <Container className="relative" innerClassName={groupClasses}>
//           {block?.innerBlocks?.map((innerBlock, index) => (
//             <Block
//               key={index}
//               block={innerBlock}
//               parentBlock={block.data}
//               isNested={true}
//               className="min-w-[150px]"
//             />
//           ))}
//         </Container>
//       </div>
//     );
//   }
// }
