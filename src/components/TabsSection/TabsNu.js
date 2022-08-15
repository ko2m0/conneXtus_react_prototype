import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { TabsInfoPanel } from './TabsElements';

export default () => (
  <Tabs>
    <TabList>
      <Tab>
        <h3 className='unuscolor-txt'>Info</h3>
      </Tab>
      <Tab>
      <h3 className='unuscolor-txt'>Clients</h3>
      </Tab>
    </TabList>
    <TabPanel>
      <TabsInfoPanel>
        <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum
        lorem ipsum lorem ipsum lorem ipsum lorem ipsum </p>
      </TabsInfoPanel>
    </TabPanel>
    <TabPanel>
      <p>Any content 2</p>
    </TabPanel>
  </Tabs>
);