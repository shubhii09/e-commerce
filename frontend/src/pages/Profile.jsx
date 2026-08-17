import React from "react";

const Profile = () => {
  const user = JSON.parse(localStorage.getItem("user"));
    const handleLogout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");

  window.location.href = "/login";
};

  return (
    <div className="min-h-screen bg-white text-[#363332] px-5 md:px-10 py-10">
      <div className="w-[92%] max-w-6xl mx-auto">

        <p className="text-sm text-[#363332]/50 mb-3">
          Home / My Account
        </p>

        <h1 className="text-3xl md:text-4xl font-light mb-10">
          My Account
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-8">

          {/* SIDEBAR */}
          <aside className="border border-[#363332]/10 p-5 h-fit">

            <div className="flex flex-col gap-2">

              <button className="text-left px-4 py-3 bg-[#363332] text-white">
                Profile
              </button>

              <button className="text-left px-4 py-3 hover:bg-[#363332]/5">
                Orders
              </button>

              <button className="text-left px-4 py-3 hover:bg-[#363332]/5">
                Wishlist
              </button>

              <button className="text-left px-4 py-3 hover:bg-[#363332]/5">
                Addresses
              </button>

              <button className="text-left px-4 py-3 hover:bg-[#363332]/5">
                Security
              </button>

            </div>

          </aside>

          {/* PROFILE */}
          <div className="border border-[#363332]/10 p-6 md:p-8">

            <div className="flex items-center gap-5 pb-7 border-b border-[#363332]/10">

              <div className="w-16 h-16 rounded-full bg-[#363332] text-white flex items-center justify-center text-2xl font-semibold">
                {user?.name?.charAt(0).toUpperCase()}
              </div>

              <div>
                <h2 className="text-xl font-medium">
                  {user?.name || "User"}
                </h2>

                <p className="text-sm text-[#363332]/55 mt-1">
                  {user?.email}
                </p>
              </div>

            </div>

        <div className="mt-8 space-y-6">

  <div>
    <p className="text-xs uppercase tracking-wider text-[#363332]/45">
      Full Name
    </p>

    <p className="mt-2 text-sm">
      {user?.name || "Not available"}
    </p>
  </div>

  <div>
    <p className="text-xs uppercase tracking-wider text-[#363332]/45">
      Email Address
    </p>

    <p className="mt-2 text-sm">
      {user?.email || "Not available"}
    </p>
  </div>

  <div>
    <p className="text-xs uppercase tracking-wider text-[#363332]/45">
      Mobile Number
    </p>

    <p className="mt-2 text-sm">
      +91 {user?.mobile || "Not available"}
    </p>
  </div>

  {/* LOGOUT BUTTON */}
  <button
    onClick={handleLogout}
    className="mt-10 bg-[#363332] text-white px-6 py-3 text-sm rounded-lg"
  >
    Logout
  </button>

</div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default Profile;