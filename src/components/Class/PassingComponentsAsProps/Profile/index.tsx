export type ProfileProps = {
  name: string;
};
function Profile({ name }: ProfileProps) {
  return <div>Private profile component. Name is {name}</div>;
}

export default Profile;
