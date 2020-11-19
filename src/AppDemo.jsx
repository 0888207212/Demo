import React from 'react';
class Demo extends React.Component {
    render(){
        const {data} = this.props;
        console.log('usser',data)
        return(     
            <div>
                {
                    data.map(e=>
                    <p key={e.id}>{e.userName}  {e.age} {e.sex}</p>
                    )
                }
            </div>
                  
        )
    }
}
export default Demo;