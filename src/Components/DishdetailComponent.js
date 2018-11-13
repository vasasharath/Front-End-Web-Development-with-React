import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap';

class DishdetailComponent extends Component {

    renderDish(dish) {
        return (
            <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        );
    }

    renderComments(dish) {
        const comments = this.props.dish.comments.map(comment => {
            return (
                <li>
                    <p>{comment.comment}</p>
                    <p>-- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                </li>
            );
        });

        return (
            <div>
                <h3>Comments</h3>
                <ul className="list-unstyled">
                    {comments}
                </ul>
            </div>
        );
    }

    render() {
        if (this.props.dish != null) {
            return (
                <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(this.props.dish)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {this.renderComments(this.props.dish)}
                    </div> 
                </div> 
                </div>
            );
        } else {
            return (
                <div className="col-12"></div>
            );
        }
    }
}

export default DishdetailComponent; 