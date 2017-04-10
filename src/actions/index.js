export function getRepos(response) {
  return{
    type: 'Get_Repos',
    payload: response
  }
}

export function getRepoThunk() {
  return function(dispatch, getState) {
    fetch('https://api.github.com/repositories')
    .then(e => e.json())
      .then(function(response){
        console.log(response);
        var arr = response.slice(0,10);
        dispatch(getRepos(arr))
      }).catch((error) => {
           console.error(error,"ERRRRRORRR");
       });
  }
}

export function repoSelected(repo){
  return{
    type: 'Repo_Selected',
    payload: repo
  }
}
