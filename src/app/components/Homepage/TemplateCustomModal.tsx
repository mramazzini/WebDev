const TemplateCustomModal = () => {
  const openModal = () => {
    const modal = document.getElementById(
      "template-vs-custom"
    ) as HTMLDialogElement;
    modal?.showModal();
  };
  return (
    <>
      <button
        onClick={openModal}
        className="text-accent/90 p-2 hover:text-white flex justify-center items-center"
      >
        Whats the difference?
      </button>
      {/*modal*/}
      <dialog id="template-vs-custom" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <div className="modal-body flex flex-row">
            <div className="text-2xl font-bold text-white flex flex-col w-1/2  px-4">
              <h4>Template</h4>
              <p className="text-lg text-neutral-content h-32 overflow-scroll mt-4">
                Select your industry and we will build your website off our
                pre-built templates, which solve the problems you are most
                likely to face.
              </p>
              <ul className=" mt-4 list-disc text-lg text-neutral-content w-full">
                <li className="border-b border-white/50 py-1 flex justify-between">
                  <span>Fast Development Time</span>
                  <span className="text-primary text-lg ">✓</span>
                </li>
                <li className="border-b border-white/50 py-1 flex justify-between">
                  <span>Cost Effective</span>
                  <span className="text-primary text-lg ">✓</span>
                </li>
                <li className="border-b border-white/50 py-1 flex justify-between">
                  <span>Easy to Maintain</span>
                  <span className="text-primary text-lg ">✓</span>
                </li>
                <li className="border-b border-white/50 py-1 flex justify-between">
                  <span>Easy to Upgrade</span>
                  <span className="text-primary text-lg ">✓</span>
                </li>
              </ul>
              <p className="text-xl font-bold text-primary my-4">
                This is a great option for starting out.
              </p>
            </div>
            <div className="divider divider-horizontal divider-secondary"></div>
            <div className="text-2xl font-bold text-white flex flex-col w-1/2  px-4 ">
              <h4>Custom</h4>
              <p className="text-lg text-neutral-content h-32 text-ellipsis overflow-scroll mt-4">
                Built from the ground up, this option is tailored to your
                specific needs. We work with you to create a unique solution
                that fits your business.
              </p>
              <ul className=" mt-4 list-disc text-lg text-neutral-content w-full ">
                <li className="border-b border-white/50 py-1 flex justify-between">
                  <span>Unique Design</span>
                  <span className="text-primary text-lg ">✓</span>
                </li>
                <li className="border-b border-white/50 py-1 flex justify-between">
                  <span>Scalable</span>
                  <span className="text-primary text-lg ">✓</span>
                </li>
                <li className="border-b border-white/50 py-1 flex justify-between">
                  <span>Custom Features</span>
                  <span className="text-primary text-lg ">✓</span>
                </li>
                <li className="border-b border-white/50 py-1 flex justify-between">
                  <span>24/7 Support</span>
                  <span className="text-primary text-lg ">✓</span>
                </li>
              </ul>
              <p className="text-xl font-bold text-primary my-4">
                This is a great option for established businesses.
              </p>
            </div>
          </div>

          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
      {/*modal end*/}
    </>
  );
};

export default TemplateCustomModal;
