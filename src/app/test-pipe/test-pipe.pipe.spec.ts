import { TestPipePipe } from './test-pipe.pipe';import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

@Component({
  template:'<p>lower case name: {{ name|testPipe }}</p>'
})
export class TestPipeComponent{
  name: string;
}

describe('TestPipePipe', () => {
  let fixture: ComponentFixture<TestPipeComponent>;
  let el: HTMLElement;
  let component: TestPipeComponent;

  it('test pipe should work', ()=>{
    TestBed.configureTestingModule({
      declarations: [TestPipeComponent, TestPipePipe]
    })

    fixture = TestBed.createComponent(TestPipeComponent);
    el = fixture.nativeElement;
    component = fixture.componentInstance;
    component.name = 'Nguyen Van A';
    fixture.detectChanges();
    let pText = el.querySelector('p').textContent;
    expect(pText).toContain('nguyen van a');
  })
});
