import React, { Component } from 'react';
import Banner from '@/components/Banner';
import Prolist from '@/components/Prolist';
class Com extends Component {
  componentDidMount () {
    console.log(this.props)
    this.props.getBannerList ()
    this.props.getProList ()
  }
  render () {
    return (
      <div>
        <Banner bannerlist = { this.props.bannerlist } />
        <Prolist prolist = { this.props.prolist } />
      </div>
    )
  }
}

export default Com;