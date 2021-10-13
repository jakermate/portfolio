import React from "react";

export default function Contact() {
  return (
    <div className="min-h-full container mx-auto max-w-3xl flex items-center justify-center text-left flex-col">
        <div>
        <div className="mx-3">
        <h2 className="text-3xl lg:text-6xl mb-3 font-bold">Contact me</h2>
        <p className="text-base lg:text-xl text-gray-400">
          Hit me up about projects and opportunities. Either use the form below
          or email me at{" "}
          <a className="text-primary font-bold" href="jakemillerdev@gmail.com">
            jakemillerdev@gmail.com
          </a>
        </p>
      </div>
      <div id="contact_social_links" className="mt-8 mx-3">
        <p className="text-base lg:text-xl text-gray-400">
          Contact me through my social accounts.
        </p>

        <ul>
          <a href=""></a>
          <a href=""></a>
        </ul>
      </div>
        </div>
      
    </div>
  );
}
