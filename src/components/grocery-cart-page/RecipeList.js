import {Table, Button, Popconfirm, InputNumber} from "antd"

const RecipeList = ({onChange, onDelete, recipeCart }) => {
    function onSubmit(recipes){
        console.log("receiving recipe")
        console.log(recipes)
    }
    const columns = [{
      title: 'Name',
      dataIndex: 'name',
    }, 
    {
      title: 'Count',
      render: (text, record) => {
          return (<InputNumber min={1} max={10} defaultValue={record.count} onChange={(value)=>{
            onChange(record.id, value);
          }} />);
      }
    },
    {
      title: 'Actions',
      render: (text, record) => {
        return (
            <div>
                <Popconfirm title="Delete?" onConfirm={() => onDelete(record.id)}>
                    <Button type="danger">Delete</Button>
                </Popconfirm>
            </div>
      );
      },
    }];
    return (
        <div>
            <Table
                    dataSource={recipeCart}
                    columns={columns}
            />            
             <Button type="primary" onClick={()=> onSubmit(recipeCart)}>Generate Grocery List</Button> 
        </div>
    );
  };
  
  export default RecipeList;
