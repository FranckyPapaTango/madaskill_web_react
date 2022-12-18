import { useEffect, useState} from "react";
import getAllProducts from "../../API/ApiFile";
import { List,Card,Image,Typography,Badge,Rate,Button,message} from "antd";
import addToCard from "../../API/ApiFile";

function Products() {
const[items, setItems]=useState([]);
useEffect(()=>{
getAllProducts().then((res)=>{
setItems(res.products);
});
},[]);
return(
<div className="itemCardBackground">
     <List
     grid={{column:3}}
     renderItem={(product,index)=>{
     return(
     <Badge.Ribbon className="itemCardBadge" text={"- "+product.discountPercentage+" %"} color="pink">
     <Card className="itemCard"
     title={product.title}
     key={index}
     cover={<Image className="itemCardImage" src={product.thumbnail} />}

     actions={[
     <Rate allowHalf disabled value={product.rating} />,
     <AddToCartButton item={product} />
     ]}
     >

     <Card.Meta
     title={
         <Typography.Paragraph>
           Price:  {product.price} &#8364; {""}
               <Typography.Text delete type="danger">
               {parseFloat(product.price*(1+product.discountPercentage/100)).toFixed(2)} &#8364;
               </Typography.Text>
         </Typography.Paragraph>}

         description={
          <Typography.Paragraph  ellipsis={{rows:2, expandable:true, symbol:"more"}}>
              {product.description}
          </Typography.Paragraph>
         }
         >

     </Card.Meta>

     </Card>
     </Badge.Ribbon>
     );
     }}

     dataSource={items}
     ></List>
</div>
);
}

function AddToCartButton({item}){
const [loading, setLoading]= useState(false)
const addProductToCart=()=>{
setLoading(true)
addToCard(item.id).then(res=>{
message.success(`${item.title} has been added to Cart!`)
setLoading(false)
}
)
};

return(
<Button type="link" onClick={()=>{
addProductToCart()
}}
loading={loading}
>
Add to Cart</Button>
);
}

export default Products;
