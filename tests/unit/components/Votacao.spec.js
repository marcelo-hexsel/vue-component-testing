import { shallowMount, mount } from "@vue/test-utils";
import Votacao from "@/components/Votacao.vue";

describe("Votacao", () => {
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
});
