let React = require('react')

// let us know who your three favorite codewarriors are!
// mantain this format, but choose any three users you want:
// <h1>My three favorite codewarriors are noLan, jhoffner and OverZealous</h1>

var myHeader = <h1>My three favorite codewarriors are noLan, jhoffner and OverZealous</h1>;

var CodewarsLink = function(props) {
    return (
        <a href={"http://www.codewars.com/users/" + props.user}>
            {props.user}
        </a>
    );
};

var Leaderboard = function(props) {
    return (
        <div>
            {props.leaders.map(function(leader, index) {
                return (
                    <CodewarsLink key={index} user={leader} />
                );
            })}
        </div>
    );
}