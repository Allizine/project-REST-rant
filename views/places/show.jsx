const React = require("react");
const Def = require("../default");

function show(data) {
  return (<Def>
    <main>
      <div className="row">
        <div className="col-sm-6">
          <img src={data.place.pic} alt={data.place.name} />
          <h3>
            Located in {data.place.city}, {data.place.state}
          </h3>
        </div>
        <div className="col-sm-6">

          <h2>
            Description
          </h2>
          <h3>
            {data.place.showEstablished()}
          </h3>
          <h4>
            Serving {data.place.cuisines}
          </h4>

      </div>
      </div>
      <button>Edit</button>
      <button>Delete</button>
    </main>
  </Def>

  );
}

module.exports = show;

