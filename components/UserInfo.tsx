import Image from "next/image";

export default async function UserInfo() {
  const userInfo: IUserInfo = await fetch(
    "https://dummyjson.com/c/5a37-44ce-4fba-9bb2",
    {
      cache: "no-store",
    }
  ).then((res) => res.json());
  await new Promise((resolve) => setTimeout(resolve, 5000));

  return (
    <section className="colonian-info animate-fade">
      <div className="profile">
        <Image
          src={userInfo.imgSrc}
          width="64"
          height="64"
          className="profile__image"
          alt={"profile__image"}
        />
        <p className="profile__mycode">{`ID:${userInfo.userId}`}</p>
        <p className="profile__nickname">{userInfo.nickName}</p>
      </div>
    </section>
  );
}

interface IUserInfo {
  imgSrc: string;
  nickName: string;
  userId: string;
}
