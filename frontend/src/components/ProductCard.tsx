// import { Typography } from "@mui/material";

// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";

// import Product from "../models/Product";

// interface ProductCardProps {
//     product: Product | null;
// }

// function ProductCard({ product }: ProductCardProps) {
//     return (
//         <>
//             <Card variant="outlined" sx={{ width: 300, height: 400 }}>
//                 <CardContent>
//                     <CardMedia
//                         sx={{ height: 200 }}
//                         image={product?.getImageUrl()}
//                         title={product?.getName()}
//                     />
//                     <Typography>Nume: {product?.getName()}</Typography>
//                     <Typography>Categorie: {product?.getCategory()}</Typography>
//                     <Typography>
//                         Descriere: {product?.getDescription()}
//                     </Typography>
//                     <Typography>
//                         Pret:{" "}
//                         {product?.getPrice() + " " + product?.getCurrency()}
//                     </Typography>
//                     <Typography>Cantitate: {product?.getQuantity()}</Typography>
//                     <Typography>
//                         Greutate:{" "}
//                         {product?.getWeight() + "" + product?.getUnit()}
//                     </Typography>
//                 </CardContent>
//             </Card>
//         </>
//     );
// }

// export default ProductCard;

import { Typography, IconButton, Card, CardContent, CardMedia, Box, Stack, Tooltip } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Product from "../models/Product";

interface ProductCardProps {
  product: Product | null;
  onEdit: (product: Product | null) => Promise<void>;
  onDelete: (product: Product | null) => Promise<void>;
}

function ProductCard({ product, onEdit, onDelete }: ProductCardProps) {
  if (!product) return null;

  return (
    <Card
      variant="outlined"
      sx={{
        width: 300,
        height: 400,
        borderRadius: 3,
        overflow: "hidden",
        transition: "0.25s",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: 5,
        },
      }}
    >
      <CardContent sx={{ p: 0 }}>
        <CardMedia
          image={product.getImageUrl()}
          title={product.getName()}
          sx={{
            height: 190,
            width: "100%",
            objectFit: "cover",
            borderBottom: "1px solid rgba(0,0,0,0.12)",
          }}
        />

        <Box sx={{ px: 2, pt: 1.5 }}>
          <Stack spacing={0.6}>
            <Typography fontSize={18} fontWeight={600}>{product.getName()}</Typography>
            <Typography fontSize={14} color="text.secondary">{product.getCategory() || "Fara categorie"}</Typography>

            <Typography
              fontSize={13}
              sx={{
                mt: 1,
                height: 48,
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitLineClamp: 3,
                WebkitBoxOrient: "vertical",
              }}
            >
              {product.getDescription() || "Fara descriere"}
            </Typography>

            <Typography fontSize={16} fontWeight={700} sx={{ mt: 1 }}>
              {product.getPrice()} {product.getCurrency()}
            </Typography>

            <Typography fontSize={13}>Cantitate: {product.getQuantity()}</Typography>
            <Typography fontSize={13}>Greutate: {product.getWeight()} {product.getUnit()}</Typography>
          </Stack>
        </Box>
      </CardContent>

      {/* Buttons Section */}
      <Box sx={{ pb: 1.2 }}>
        <Stack direction="row" justifyContent="space-around">
          <Tooltip title="Editeaza">
            <IconButton onClick={() => onEdit(product)}>
              <EditIcon />
            </IconButton>
          </Tooltip>

          <Tooltip title="Sterge" arrow>
            <IconButton
              onClick={() => onDelete(product)}
              sx={{
                "&:hover": {
                  backgroundColor: "rgba(255,0,0,0.08)",
                  "& svg": { color: "red" },
                },
              }}
            >
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        </Stack>
      </Box>
    </Card>
  );
}

export default ProductCard;
