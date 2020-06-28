import { shallowMount, mount } from "@vue/test-utils";
import OpcaoVotacao from "@/components/OpcaoVotacao.vue";

describe("Component: OpcaoVotacao", () => {
  let component

  const shallowMountComponent = () => {
    component = shallowMount(OpcaoVotacao, {
      propsData: {
        option: "1",
        name: "Switch",
        imageUrl: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.com.br%2FNintendo-HADSKAAAA-New-Switch-Cinza%2Fdp%2FB07VJRZ62R&psig=AOvVaw2b1kxa1SIWdS31UQoqToVE&ust=1593468225748000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLDti-_BpeoCFQAAAAAdAAAAABAD",
        percentual: "0%",
        voteCount: 0,
      },
    })
  }

  beforeEach(() => {
    shallowMountComponent()
  })

  describe("methods", () => {
    describe("vote", () => {
      it("Should emmit", () => {
        
      })
    })
  })
});
