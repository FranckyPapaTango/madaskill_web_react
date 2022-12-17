import {Menu} from "antd";
import {HomeFilled} from "@ant-design/icons";

function AppHeader() {
  return (<div className="appHeader">
  <Menu mode="horizontal"
items={[
{
label:<HomeFilled/>,
key:"home"
},

{
label:"Men",
key:"men",

children:[
{
label:"Shirt",
key:"shirt"
},
{
label:"Shoes",
key:"shoes"
},
{
label:"Watches",
key:"watches"
},
]
},


{
label:"Women",
key:"women",

children:[
{
label:"Dresses",
key:"dresses"
},
{
label:"Shoes",
key:"shoes"
},
{
label:"Watches",
key:"watches"
},
{
label:"Bags",
key:"bags"
},
{
label:"Jewellery",
key:"jewellery"
},
]
},
{
label:"Fragrancies",
key:"fragrancies"
},
{
label:"Accessories",
key:"accessories"
},

]}
 />

  </div>);
}
export default AppHeader;