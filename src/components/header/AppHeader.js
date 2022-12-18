import {Menu} from "antd";
import {HomeFilled} from "@ant-design/icons";
import { useNavigate} from "react-router-dom";

function AppHeader() {
const navigate=useNavigate()
const onMenuClick=(item)=>{
     navigate(`/${item.key}`)
}


  return (<div className="appHeader">
  <Menu onClick={onMenuClick} mode="horizontal"


items={[
{
label:<HomeFilled/>,
key:""
},

{
label:"Men",
key:"men",

children:[
{
label:"Shirt",
key:"men-shirt"
},
{
label:"Shoes",
key:"men-shoes"
},
{
label:"Watches",
key:"men-watches"
},
]
},


{
label:"Women",
key:"women",

children:[
{
label:"Dresses",
key:"women-dresses"
},
{
label:"Shoes",
key:"women-shoes"
},
{
label:"Watches",
key:"women-watches"
},
{
label:"Bags",
key:"women-bags"
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