import { User } from "@prisma/client";
interface UserListProps {
  contacts: User[];
}
const ContactList = ({ contacts }: UserListProps) => {
  return (
    <div>
      {contacts.length > 0 ? (
        <>
          {contacts.map((c) => (
            <div key={c.id}>
              <p>{c.firstName}</p>
            </div>
          ))}
        </>
      ) : (
        <></>
      )}
    </div>
  );
};
export default ContactList;
