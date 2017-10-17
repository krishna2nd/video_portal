import React, { Component } from 'react';
import setRating from '../../../../lib/actions/rating';
import './index.css';

const getPos = (e) => {
  const cls = e.target.className;
  let pos = +(cls.slice(cls.length - 1))
  return  pos || 0;
}

class StarRating extends Component {
  constructor() {
    super();
    this.selectStarRating = this.selectStarRating.bind(this);
    this.fixuUserRating = this.fixuUserRating.bind(this);
    this.resetRating = this.resetRating.bind(this);
    this.state = {
      avg: 0,
      total: 0,
      count: 0,
    }
  }
  componentWillMount() {
    const ratings = (this.props && this.props.ratings) || [];
    const total = (ratings.length && ratings.reduce((a, b) => a + b)) || 0;
    const avg = Math.ceil(total / (ratings.length || 1));
    const count = ratings.length > 0 ? ratings.length : '';
    this.setState({
      avg,
      total,
      count,
    })
  }

  selectStarRating(e) {
    this.setState({
      avg: getPos(e)
    })
    console.log(e.target, e.target.className);
  }

  fixuUserRating(e) {
    const rating = getPos(e);
    const total = this.state.total + rating;
    const count = this.state.count + 1
    const avg = Math.ceil(total/(count||1));
    this.setState({
      total,
      avg,
      count
    });
    if (this.props.dispatch) {
      this.props.dispatch(
        setRating(rating,
          window.Cookies.get('sessionId'),
          this.props.id
        ));
    }
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
  }
  resetRating() {
    const total = this.state.total;
    const count = this.state.count;
    const avg = Math.ceil(total/(count||1));
    this.setState({
      total,
      avg,
      count
    });
  }

  render() {
    

    const Star = (type) => [
      (<span className={`${type} 1`} >★</span>),
      (<span className={`${type} 2`} >★</span>),
      (<span className={`${type} 3`} >★</span>),
      (<span className={`${type} 4`} >★</span>),
      (<span className={`${type} 5`} >★</span>)
    ];

    return (
      <div className='rating'
        onMouseOver={this.selectStarRating}
        onClick={this.fixuUserRating}  
        onMouseOut={this.resetRating}      
        >
        {Star('mark').slice(0, this.state.avg)}
        {Star('none').slice(this.state.avg)}
        <span className='count'> ({this.state.count})</span>
      </div>
    );
  }
}

export default StarRating;
