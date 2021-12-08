import React, {Component} from "react";
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from "reactstrap";

class  Dishdetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDish: null
        }
    }
    onDishSelect(dish) {
        this.setState({ selectedDish: dish});
    }
    renderDish(dish) {
        if(dish !=null) {
            return(
                <Card>
                    <CardImg width="100%" object src={dish.image} alt={dish.name} />
                    <CardBody>
                       <CardTitle heading>{dish.name}</CardTitle>
                       <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            )

        } else {    
            return(
                <div></div>
            )
        }
    }
    renderComment(comments) {
        if(comments !=null) {
            return(
                <div className='col-12 col-md-5 m-1'>
                    <h4>Comments</h4>
                    <ul className='list-unstyled'>
                        {comments.map((comment) => {
                            return (
                                <li key={comment.id}>
                                     <p>{comment.comment}</p>
                                     <p>--{comment.author}, {new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                            
                                </li>
                            );
                        })}
                    </ul>
                </div>
            );
        
        } else {
            return(
                <div></div>
            )
        }
    }
    render() {
        if(this.props.dish !=null) {
            return(
                <div className='containner'>
                    <div className="row">
                        {this.renderDish(this.props.dish)}
                        {this.renderComment(this.props.dish.comments)}
                    </div>
                </div>
            )
    
        } else {
            return(
                <div></div>
            )
        }
    }
    
    }
    
export default Dishdetail
        