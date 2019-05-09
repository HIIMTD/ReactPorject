import React, { PureComponent } from 'react';
import { ListItem, ListInfo,LoadMore } from '../style';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'
class List extends PureComponent {
    render() {
        const { list } = this.props;
        return (
            <div>
                {
                    list.map((item) => {
                        return (
                            <Link key = {item.get('id')} to='/detail'>
                            <ListItem >
                                <img className='pic' src = {item.get('imgUrl')} alt='' />
                                <ListInfo>
                                    <h3 className='title'>{item.get('title')}</h3>
                                    <p className='desc'>{item.get('desc')}</p>
                                </ListInfo>
                            </ListItem>
                            </Link>
                        );
                    })
                }
                <LoadMore>Read More</LoadMore>
            
            </div>
        )
    }
}
const mapState = (state) => ({
    list: state.getIn(['home', 'articleList'])
})
export default connect(mapState)(List);