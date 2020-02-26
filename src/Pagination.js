import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './Pagination.scss';

class Pagination extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      page: 1,
      inputPage: 1,
      itemsPerPage: props.defaultItemCountOption,
      pageCount: this.calculatePageCount(this.props.children.length, props.defaultItemCountOption),
    };
  }

  componentDidUpdate() {
    const { pageCount, page } = this.state;

    const newPageCount = this.calculatePageCount(
      this.props.children.length,
      this.state.itemsPerPage,
    );
    let pages = [];
    for(let i=1; i<= newPageCount; i++) {
        pages.push(i);
    }
    // Explicitly check if page count has changed, only then is it safe to do the setState:
    if (pageCount !== newPageCount) {
      this.setState({
        pageCount: newPageCount,
        pages,
        ...(page > newPageCount && {
          page: newPageCount,
          inputPage: newPageCount,
        }),
      });
    }
  }

  calculatePageCount = (childCount, itemsPerPage) => {
    let pageCount = Math.ceil(childCount / itemsPerPage);
    if (Number.isNaN(pageCount) || pageCount === 0) {
      pageCount = 1;
    }

    return pageCount;
  };

  goToPage = (newPage) => {
    this.setState({
      page: newPage,
      inputPage: newPage,
    });
  };

  renderChildren = () => {
    const { page, itemsPerPage } = this.state;
    const items = React.Children.toArray(this.props.children);

    const firstIndex = (page - 1) * itemsPerPage;
    const lastIndex = firstIndex + itemsPerPage;

    return items.slice(firstIndex, lastIndex);
  };

  renderOptions = () => {
    const { inputPage, pageCount } = this.state;

    if (pageCount === 1) {
      return null;
    }

    return (
      <div className="pageContainer">
        <div className="pageOptions">
          <span
            className={cx('first', { disabled: inputPage === 1 })}
            onClick={() => this.goToPage(1)}
          >
          First
          </span>
          {this.state.pages.map(page => {
              return <span className={cx('pageLinks', { disabled: inputPage === page })} onClick={() => this.goToPage(page)}>{page}</span>
          })}
          <span
            className={cx('last', { disabled: inputPage === pageCount })}
            onClick={() => this.goToPage(pageCount)}
          >
            Last
          </span>
        </div>
      </div>
    );
  };

  render() {
    return (
      <>
        {this.renderChildren()}
        {this.renderOptions()}
      </>
    );
  }
}

Pagination.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  defaultItemCountOption: PropTypes.number,
};

Pagination.defaultProps = {
  children: <></>,
  defaultItemCountOption: 10,
};

export default Pagination;
