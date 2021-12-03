import React, { Component} from "react";
import { Card, CardText, CardBody} from "reactstrap";
import dateFormat from 'dateformat'; 

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDish: null
        }
    }
    onDishSelect(staff) {
        this.setState({ selectedDish: staff});
    }
    renderDish(staff) {
        if(staff !=null) {
            return(
                <Card>
                
                    <CardBody>
                       <CardText><h3>Họ và tên: {staff.name}</h3> </CardText>
                       <CardText>Ngày sinh: {dateFormat(staff.doB)}</CardText>
                       <CardText>Ngày vào công ty: {dateFormat(staff.startDate)}</CardText>
                       <CardText>Số ngày nghỉ còn lại: {staff.annualLeave}</CardText>
                       <CardText>Số ngày làm thêm: {staff.overTime}</CardText>
                       <CardText>Phòng ban: {staff.department.name}</CardText>
                                                  
                    </CardBody>
                </Card>
            )
            }
    }
    render() {
        var menu = this.props.staffs.map((staff) => {
        
            return (
                <div key={staff.id} className="col-12  col-sm-5 col-md-3 m-1">
                    <Card onClick={() => this.onDishSelect(staff)}>
                                              
                           <CardText>{staff.name}</CardText>
                    </Card>

            
                </div>
            )
        })
        return (
            <div className="container">
                <div className="row">
                    {menu}
                    
                </div>
                <div className="row">
                    {this.renderDish(this.state.selectedDish)}
                </div>
            </div>

        )
    }
}
<p>commit lan 4</p>
export default Menu;