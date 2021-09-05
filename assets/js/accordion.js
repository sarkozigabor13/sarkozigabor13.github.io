/* -------------------------------------------------------------------------- */

/*                                Accordions                                  */

/* -------------------------------------------------------------------------- */

(function () {

  // DOM Elements

  const accOne = document.getElementById('v-pills-home-tab');
  const accTwo = document.getElementById('v-pills-profile-tab');
  const accThree = document.getElementById('v-pills-messages-tab');
  const accOneTab = document.getElementById('homeTabPanel');
  const accTwoTab = document.getElementById('profileTabPanel');
  const accThreeTab = document.getElementById('messagesTabPanel');



  // Button Event Handlers

  accOne.onclick = () => {
      accOneTab.classList.remove("d-none");
      accTwoTab.classList.add("d-none");
      accThreeTab.classList.add("d-none");
  };

  accTwo.onclick = () => {
    accOneTab.classList.add("d-none");
    accTwoTab.classList.remove("d-none");
    accThreeTab.classList.add("d-none");
};

accThree.onclick = () => {
  accOneTab.classList.add("d-none");
  accTwoTab.classList.add("d-none");
  accThreeTab.classList.remove("d-none");
};

})();




