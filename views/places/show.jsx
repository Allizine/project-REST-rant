const React = require("react");
const Def = require("../default");

function show(data) {
  let comments = <h3 className='inactive'>No comments yet!</h3>;
  if (data.place.comments.length) {
    comments = data.place.comments.map((c) => {
      return (
        <div className='border'>
          <h2 className='rant'>{c.rant ? "Rant!" : "Rave!"}</h2>
          <h4>{c.content}</h4>
          <h3>
            <stong>- {c.author}</stong>
          </h3>
          <h4>Rating: {c.stars}</h4>
        </div>
      );
    });
  }
  let rating = <div className='inactive'>Not yet rated</div>;
  let stars = "";

  if (data.place.comments.length) {
    let sumRatings = data.place.comments.reduce((tot, c) => {
      return tot + c.stars;
    }, 0);
    let averageRating = Math.round(sumRatings / data.place.comments.length);
    rating = <h3>{Math.round(averageRating)} stars</h3>;
    stars = "";
    for (let i = 0; i < averageRating; i++) {
      stars += "⭐️";
    }
  }
  return (
    <Def>
      <main>
        <div className='row'>
          <div className='col-sm-6'>
            <img src={data.place.pic} alt={data.place.name} />
            <h3>
              Located in {data.place.city}, {data.place.state}
            </h3>
          </div>
          <div className='col-sm-6'>
            <h2>Description</h2>
            <h3>{data.place.showEstablished()}</h3>
            <h4>Serving {data.place.cuisines}</h4>
          </div>
        </div>
        <hr />
        <h2>Comments</h2>
        {comments}

        <form method='POST' action={`/places/${data.place.id}/comment`}>

          <div className='form-group'>
            <label htmlFor='author'>Author</label>
            <input className='form-control' id='author' name='author'/>
          </div>

          <div className='form-group'>
            <label htmlFor='content'>Content</label>
            <input className='form-control' id='content' name='content' type='textarea' />
          </div>

          <div className='form-group'>
            <label htmlFor='stars'>Star Rating</label>
            <input className='form-control' id='stars' name='stars' type='range' step='0.5' min='0' max='5' />
          </div>

          <div className='form-group'>
            <label htmlFor='rant'>Rant</label>
            <input  id='rant' name='rant' type='checkbox' defaultChecked/>
          </div>

          <input className='btn btn-primary' type='submit' value='Add Comment' />
        <form method="POST" action={`/places/${data.place.id}/comment/${c.id}?_method=DELETE`}>
          <input type="submit" className="btn btn-danger" value="Delete Comment" />
        </form>
      </main>
    </Def>
  );
}

module.exports = show;