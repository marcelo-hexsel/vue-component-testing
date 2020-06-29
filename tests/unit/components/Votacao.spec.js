import { shallowMount, mount } from "@vue/test-utils";
import Votacao from "@/components/Votacao.vue";

describe("Votacao", () => {

  describe("data", () => {
    let component = shallowMount(Votacao);

    it("Should define default data correctly", () => {
      expect(component.vm.totalVotes).toBe(0);
      expect(component.vm.openVoting).toBeTruthy();
    });
  })

  describe("methods", () => {
    let component = shallowMount(Votacao);

    describe("vote", () => {
      it("Should add votes", () => {
        // Given
        let ev = { option: "1" }
        component.setData({
          totalVotes: 0,
          option1: {
            votes: 0
          }
        })
        // When
        component.vm.vote(ev)
        // Then
        expect(component.vm.totalVotes).toBe(1);
        expect(component.vm.option1.votes).toBe(1);
      })
    })
    describe("percentual", () => {
      it("Should return percentual", () => {
        // Given
        component.setData({
          totalVotes: 2,
          option1: {
            votes: 1
          }
        })
        // When
        const result = component.vm.percentual(component.vm.option1)
        // Then
        expect(result).toBe("50.00%");
      })
      it("Should return 0% when error", () => {
        // Given
        component.setData({
          totalVotes: 2,
          option1: {
            votes: "a"
          }
        })
        // When
        const result = component.vm.percentual(component.vm.option1)
        // Then
        expect(result).toBe("0%");
      })
      it("Should return 0% when divided by zero", () => {
        // Given
        component.setData({
          totalVotes: 0,
          option1: {
            votes: 2
          }
        })
        // When
        const result = component.vm.percentual(component.vm.option1)
        // Then
        expect(result).toBe("0%");
      })
    })
  })

  describe("computed", () => {
    let component = shallowMount(Votacao);

    describe("winner", () => {
      it("Should return the most voted winner", () => {
        // Given
        component.setData({
          totalVotes: 0,
          option1: {
            votes: 5,
            image: "xaéxaé"
          },
          option2: {
            votes: 2
          },
          option3: {
            votes: 3
          }
        })

        // Then
        const expected = {"code": "1", "image": "xaéxaé", "name": "Playstation 4", "votes": 5}
        expect(component.vm.winner).toStrictEqual(expected);
      });
    });
  })

  describe("watch", () => {
    //GIVEN
    let component = shallowMount(Votacao);

    describe("totalVotes", () => {
      it("should not close voting when totalVotes is still below 20", async () => {
        //WHEN
        component.setData({
          totalVotes: 19,
        });

        //watcher não são síncronos! Precisamos aguardar o próximo ciclo do Vue para que os watchers já tenham sido executados
        await component.vm.$nextTick;

        //THEN
        expect(component.vm.openVoting).toBe(true);
      });

      it("should close voting when totalVotes is 20", async () => {
        //WHEN
        component.setData({
          totalVotes: 20,
        });

        //watcher não são síncronos! Precisamos aguardar o próximo ciclo do Vue para que os watchers já tenham sido executados
        await component.vm.$nextTick;

        //THEN
        expect(component.vm.openVoting).toBe(false);
      });
    });
  });

  describe("snapshot", () => {
    it("should look like shallow snapshot", () => {
      let component = shallowMount(Votacao);

      expect(component.element).toMatchSnapshot("VotacaoShallow");
    });

    it("should look like full snapshot", () => {
      let component = mount(Votacao);

      expect(component.element).toMatchSnapshot("VotacaoFull");
    });
  });
});
