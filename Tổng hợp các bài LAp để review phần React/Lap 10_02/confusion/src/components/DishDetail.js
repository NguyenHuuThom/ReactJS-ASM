import React, { useState } from 'react';
import { Card, CardBody, CardImg, CardTitle, CardText, Breadcrumb, BreadcrumbItem, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import CommentForm from './CommentForm';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';
import { baseUrl } from '../redux/baseUrl';
function RenderDish({dish}) {
    return (
        <FadeTransform
                in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>
            <Card>
                <CardImg top src={baseUrl + dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        </FadeTransform>
    );
}

function RenderComments({comments, addComment, dishId}) {
    const Comments = comments.map((comment) => {
        return (
            <Stagger in>
                        {comments.map((comment) => {
                            return (
                                <Fade in>
                                <li key={comment.id}>
                                <p>{comment.comment}</p>
                                <p>-- {comment.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                                </li>
                                </Fade>
                            );
                        })}
            </Stagger>
        )
        
    })
    return (
      <div>
        <h4>Comments</h4>
        {Comments}
      </div>
    );
}

const DishDetail = (props) => {

    const [isModalOpen, setModalOpen] = useState(false);

    if (props.dish) {
        return (
            <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>{props.dish.name}</h3>
                    <hr />
                </div>                
            </div>
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <RenderDish dish={props.dish} />
                </div>
                <div className="col-12 col-md-5 m-1">
                    <div>
                    <RenderComments comments={props.comments}addComment={props.addComment}dishId={props.dish.id}/>
                        <Button outline onClick={() => setModalOpen(!isModalOpen)} className="bg-light">
                            <span className="fa fa-sign-in fa-lg"></span> Submit comment
                        </Button>
                        <CommentForm isModalOpen={isModalOpen} setModalOpen={setModalOpen} dishId={props.dish.id} addComment={props.addComment} />
                    </div>
                </div>
            </div>
            </div>
        );
    } else {
      return <div></div>;
    }
}

export default DishDetail;