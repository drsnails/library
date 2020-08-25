


export class BookFilter extends React.Component {

    state = {
        filterByTxt: '', 
        filterMax: 0,
        filterMin: 0
    }

    componentDidMount() {
       this.loadFilters()
    }


    loadFilters() {
        const searchParams= new URLSearchParams(this.props.location.search)
        const filterByTxt = searchParams.get('filterByTxt') || ''
        const filterMin = searchParams.get('filterMin') || ''
        const filterMax = searchParams.get('filterMax') || ''
        this.setState({ filterByTxt, filterMin, filterMax }, () => {
            this.props.onFilter(this.state.filterByTxt, 'filterByTxt')
            this.props.onFilter(this.state.filterMin, 'filterMin')
            this.props.onFilter(this.state.filterMax, 'filterMax')
        })
    }

    handleChange = (val, filterBy) => {
        this.setState({ [filterBy]: val }, () => this.props.onFilter(this.state[filterBy], filterBy))
    }

    render() {
        const {filterByTxt, filterMin, filterMax} = this.state
        return (
        <section className="book-filter">
            <form action="">
                <div className="name-filter">
                    <h4>Book Title</h4>
                    <input value={filterByTxt} type="text" placeholder="Filter by Title" onChange={(ev) => {
                        this.handleChange(ev.target.value, 'filterByTxt')
                    }} />
                </div>

                <div className="price-filter">
                    <h4>Price Range</h4>
                    <input value={filterMin} className="range-input" type="number" placeholder="From" onChange={(ev) => {
                        this.handleChange(ev.target.value, 'filterMin')
                    }} />
                    <input value={filterMax} className="range-input" type="number" placeholder="To" onChange={(ev) => {
                        this.handleChange(ev.target.value, 'filterMax')
                    }} />
                </div>

            </form>
            {/* <button className="filter-btn" onClick={(ev) => {
                this.props.onFilter
            }}>Filter</button> */}

        </section>)
    }
}