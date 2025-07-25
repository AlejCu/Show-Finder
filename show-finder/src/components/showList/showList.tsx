import { ShowListStyles } from "../showList/showListStyles";
import { Link } from 'react-router-dom';

function ShowList({
    shows,
    loading,
    error,
}: {
    shows: any[];
    loading: boolean;
    error: string | null;
}) {
  return (
    <ShowListStyles>
        {loading && <p>Loading shows...</p>}
        {error && <p>{error}</p>}
        {shows.map((showObj: any) => (
        <div className="show_container" key={showObj.show.id}>
          <Link to={`/show/${showObj.show.id}`} data-id={showObj.show.id}>
            <img
              src={showObj.show.image ? showObj.show.image.original : null}
              alt={showObj.show.name}
            />
          </Link>
          <h1>{showObj.show.name}</h1>
        </div>
      ))}
    </ShowListStyles>
  );
}

export { ShowList };