var StationList = React.createClass({displayName: "StationList",
    render: function () {
        var stationList = this.props.data.map(function (station) {
            return (
                React.createElement(Station, {info: station})
            );
        });
        return (
            React.createElement("section", {className: "stationList"}, 
                stationList
            )
        );
    }
});