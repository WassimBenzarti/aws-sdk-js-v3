import { ElasticBeanstalkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticBeanstalkClient";
import { DisassociateEnvironmentOperationsRoleMessage } from "../models/models_0";
import {
  deserializeAws_queryDisassociateEnvironmentOperationsRoleCommand,
  serializeAws_queryDisassociateEnvironmentOperationsRoleCommand,
} from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export type DisassociateEnvironmentOperationsRoleCommandInput = DisassociateEnvironmentOperationsRoleMessage;
export type DisassociateEnvironmentOperationsRoleCommandOutput = __MetadataBearer;

export class DisassociateEnvironmentOperationsRoleCommand extends $Command<
  DisassociateEnvironmentOperationsRoleCommandInput,
  DisassociateEnvironmentOperationsRoleCommandOutput,
  ElasticBeanstalkClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DisassociateEnvironmentOperationsRoleCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElasticBeanstalkClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DisassociateEnvironmentOperationsRoleCommandInput, DisassociateEnvironmentOperationsRoleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName: "ElasticBeanstalkClient",
      commandName: "DisassociateEnvironmentOperationsRoleCommand",
      inputFilterSensitiveLog: DisassociateEnvironmentOperationsRoleMessage.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DisassociateEnvironmentOperationsRoleCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryDisassociateEnvironmentOperationsRoleCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DisassociateEnvironmentOperationsRoleCommandOutput> {
    return deserializeAws_queryDisassociateEnvironmentOperationsRoleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
