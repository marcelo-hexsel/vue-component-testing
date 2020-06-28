import { shallowMount, mount } from "@vue/test-utils";
import Votacao from "@/components/Votacao.vue";

describe("Component: Votacao", () => {
  let component

  const shallowMountComponent = () => {
    component = shallowMount(Votacao, {
    })
  }

  beforeEach(() => {
    shallowMountComponent()
  })

  describe("data", () => {
    it("Should define default data correctly", () => {
      expect(component.vm.totalVotes).toBe(0);
      expect(component.vm.votes1).toBe(0);
      expect(component.vm.votes2).toBe(0);
      expect(component.vm.votes3).toBe(0);
    });
  })

  describe("methods", () => {
    describe("vote", () => {
      it("Should add votes", () => {
        // Given
        component.vm.totalVotes = 0
        component.vm.votes1 = 0
        // When
        component.vm.vote(1)
        // Then
        expect(component.vm.totalVotes).toBe(1);
        expect(component.vm.votes1).toBe(1);
      })
    })
    describe("percentual", () => {
      it("Should return percentual", () => {
        // Given
        component.vm.totalVotes = 2
        component.vm.votes1 = 1
        // When
        const resuult = component.vm.percentual(1)
        // Then
        expect(resuult).toBe("50.00%");
      })
      it("Should return 0% when error", () => {
        // Given
        component.vm.totalVotes = 2
        component.vm.votes1 = 1
        // When
        const resuult = component.vm.percentual(0)
        // Then
        expect(resuult).toBe("0%");
      })
    })
  })

  describe("computed", () => {
    describe("winner", () => {
      it("Should return the most voted winner votes", () => {
        component.vm.votes3 = 1
        component.vm.votes2 = 2
        component.vm.votes1 = 3

        expect(component.vm.winnerNumberOfVotes).toBe("O vencedor tem 3 votos.");
      });
    });
  })

  describe("watch", () => {
    it("Should 1 to be 1", () => {
      expect(1).toBe(1);
    });
  })
});
