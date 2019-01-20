import { templateMeta } from '@glimmer/util';
export function locatorFor(moduleLocator) {
    let { module, name } = moduleLocator;
    let l = {
        module,
        name,
        kind: 'template',
        meta: templateMeta({ locator: moduleLocator }),
    };
    return templateMeta(l);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi9sb2NhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFN0MsTUFBTSxVQUFVLFVBQVUsQ0FDeEIsYUFBNEI7SUFFNUIsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxhQUFhLENBQUM7SUFFckMsSUFBSSxDQUFDLEdBQW9DO1FBQ3ZDLE1BQU07UUFDTixJQUFJO1FBQ0osSUFBSSxFQUFFLFVBQVU7UUFDaEIsSUFBSSxFQUFFLFlBQVksQ0FBQyxFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsQ0FBQztLQUMvQyxDQUFDO0lBRUYsT0FBTyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDekIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZUxvY2F0b3IsIFRlbXBsYXRlTWV0YSwgVGVtcGxhdGVMb2NhdG9yIH0gZnJvbSAnQGdsaW1tZXIvaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBXcmFwcGVkTG9jYXRvciB9IGZyb20gJy4vY29tcG9uZW50cy90ZXN0LWNvbXBvbmVudCc7XG5pbXBvcnQgeyB0ZW1wbGF0ZU1ldGEgfSBmcm9tICdAZ2xpbW1lci91dGlsJztcblxuZXhwb3J0IGZ1bmN0aW9uIGxvY2F0b3JGb3IoXG4gIG1vZHVsZUxvY2F0b3I6IE1vZHVsZUxvY2F0b3Jcbik6IFRlbXBsYXRlTWV0YTxUZW1wbGF0ZUxvY2F0b3I8V3JhcHBlZExvY2F0b3I+PiB7XG4gIGxldCB7IG1vZHVsZSwgbmFtZSB9ID0gbW9kdWxlTG9jYXRvcjtcblxuICBsZXQgbDogVGVtcGxhdGVMb2NhdG9yPFdyYXBwZWRMb2NhdG9yPiA9IHtcbiAgICBtb2R1bGUsXG4gICAgbmFtZSxcbiAgICBraW5kOiAndGVtcGxhdGUnLFxuICAgIG1ldGE6IHRlbXBsYXRlTWV0YSh7IGxvY2F0b3I6IG1vZHVsZUxvY2F0b3IgfSksXG4gIH07XG5cbiAgcmV0dXJuIHRlbXBsYXRlTWV0YShsKTtcbn1cbiJdfQ==