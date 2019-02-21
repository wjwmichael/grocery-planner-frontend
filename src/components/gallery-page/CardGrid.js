import { Card, Col, Row, Pagination, Meta } from 'antd';
import { func } from 'prop-types';

const CardGrid = ({recipeList, pageNum})=>{
    function onChange(pageNum){
        console.log(pageNum)
    }
    let recipes = recipeList.slice(pageNum*9, (pageNum+1)*9);
    return (
        <div style={{ padding: '30px' }}>
            {
                recipeList.reduce((resultArray, item, index) => {
                    const perChunk = 3; 
                    const chunkIndex = Math.floor(index/perChunk)
                  
                    if(!resultArray[chunkIndex]) {
                      resultArray[chunkIndex] = [] // start a new chunk
                    }
                  
                    resultArray[chunkIndex].push(item)
                  
                    return resultArray
                  }, []).map(chunk=>{
                      let innerCards = chunk.map(recipe=>{
                          return (
                            <Col span={8}>
                            <Card
                            hoverable
                            title = {recipe.name}
                            style={{ width: 215 , margin: 20}}
                            cover={<img alt={recipe.category_cn} src={recipe.imgurl} />}
                            >
                            </Card>
                            </Col>
                          );
                      })
                      return (
                        <Row gutter={16}>
                            {innerCards}
                        </Row>
                      );
                  })
                
            }

            <Pagination defaultCurrent={1} total={50} onChange = {onChange}/>
        </div>
        
    );
}

export default CardGrid;